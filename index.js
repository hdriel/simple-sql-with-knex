const db = require('./db');

(async () => {
    const email = 'test@test.com';
    const get_all_data = db('examples').where({ email });
    console.log(get_all_data.toString());

    await db.transaction(async (tx) => {
        await tx('examples').insert({ email: 'test2@test.com', password: '123' }).returning('example_id');
        const [example_id] = await tx('examples').insert({ email, password: '123' }).returning('example_id');
        console.log({ example_id });
        // await tx('examples').insert({ email, password: '123' }).returning('example_id');
    });

    process.exit();
})();
