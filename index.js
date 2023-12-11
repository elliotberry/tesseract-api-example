import Fastify from 'fastify';
import multipart from 'fastify-multipart';
import { createWorker } from 'tesseract.js';

const fastify = Fastify();

fastify.register(multipart);

const getText = async (buffer) => {
    const worker = await createWorker('eng');
    await worker.load(buffer);
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    const { data: { text } } = await worker.recognize(buffer);
    await worker.terminate();
    return text;
}

fastify.post('/upload', async (request, reply) => {
    const data = await request.file();
    const buffer = await data.toBuffer();

   let now = new Date();
    let text = await getText(buffer);
 
    let then = new Date();
    console.log(then - now);

    reply.send({ text });
});

const start = async () => {
    try {
        await fastify.listen(3000);
        console.log(`Server listening on ${fastify.server.address().port}`);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};

start();
