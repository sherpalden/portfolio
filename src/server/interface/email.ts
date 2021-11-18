export interface IEmailOptions {
  from?: string;
  to: string;
  subject: string;
  text: string;
}

export interface ISampleEmail {
  name: string;
  company: string;
}
