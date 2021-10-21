
export interface IReqFile {
    model?: string;
    type?: string;
    fileNumberLimit: number | undefined;
    fileSizeLimit?: number | undefined; //bytes
}