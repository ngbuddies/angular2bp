import { Injectable } from '@angular/core';
 
@Injectable()
export class Configuration {
    public Server: string = "https://api2.directscaledev.com/";
    public ApiUrl: string = "api/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}