"use strict";

export default class DenoSteam{
    private apikey:string|number;
    private steamurl= "http://api.steampowered.com" ;

    constructor(
        apikey:string|number
    ){
        this.apikey = apikey;
    }

    public async GetNewsForApp(appid:string|number, amount:string|number, maxLength:string|number){
        const response = await fetch(`${this.steamurl}/ISteamNews/GetNewsForApp/v0002/?appid=${appid}&count=${amount}&maxlength=${maxLength}`);
        const json = await response.json().catch(console.error);
        return await json;
    }

    public async GetGlobalAchievmentPercentagesForApp(appid:string|number){
        const response = await fetch(`${this.steamurl}/ISteamUserStats/GetGlobalPercentagesForApp/v0002/?gameid=${appid}&format=json`);
        const json = await response.json().catch(console.error);
        return await json;
    }

    public async GetPlayerSummaries(playerid:string|number){
        const response = await fetch(`${this.steamurl}/ISteamUser/GetPlayerSummaries/v0002/?key=${this.apikey}&steamids=${playerid}&format=json`);
        const json = await response.json().catch(console.error);
        return await json;
    }

    public async GetFriendList(playerid:string|number){
        const response = await fetch(`${this.steamurl}/ISteamUser/GetFriendList/v0001/?key=${this.apikey}&steamid=${playerid}&relationship=friend&format=json`);
        const json = response.json().catch(console.error);
        return await json;
    }
}