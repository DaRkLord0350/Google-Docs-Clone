import mongoose  from 'mongoose';

const Connection = async (username = 'usercode', password = 'codeforinterview') => {
    const URL = `mongodb+srv://examanshu:sDtENU4kKf7PJZfG@cluster0.dk7t4.mongodb.net/`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;