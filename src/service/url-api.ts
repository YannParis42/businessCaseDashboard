export class UrlApi{
  static rawUrl: string = "http://lanimaleriebc.atwebpages.com/api";
  // static rawUrl: string = "http://127.0.0.1:8000/api";
  static loginCheck: string = UrlApi.rawUrl+"/login_check";
  static keyTokenJWT: string = "tokenJWT";
  static commandRecurrence: string = UrlApi.rawUrl + '/command/Recurrence';
}
