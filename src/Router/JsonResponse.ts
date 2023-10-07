export class JsonResponse {
  private readonly data: object | string;

  constructor(data: object | string = "") {
    this.data = data;
  }

  public toResponse(): object {
    return {
      meta: {
        name: process.env.APP_NAME,
        version: process.env.APP_VERSION,
      },
      data: this.data,
    };
  }
}
