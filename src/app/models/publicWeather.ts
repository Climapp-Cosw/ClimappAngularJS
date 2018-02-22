export class PublicWeather{
    private latitud: number;
    private longitud: number;
    
    private clima: string;
  

    constructor(latitud: number, longitud: number,  clima: string) {
        this.latitud = latitud;
        this.longitud = longitud;
       
        this.clima = clima;
        
    }
}
