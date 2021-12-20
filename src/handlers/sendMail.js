import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'eu-central-1' });

const sendMail = async (event, context) => {
  const params = {
    Source: 'canyde@hotmail.de',
    Destination: {
      ToAddresses: ['canberk.demirkan@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hello from Codingly!',
        },
      },
      Subject: {
        Data: 'SLS Test-Mail',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const handler = sendMail;
