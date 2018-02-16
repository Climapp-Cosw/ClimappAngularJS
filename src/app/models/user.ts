export class User{
    private name: string;
    private email: string;
    private image: string;
    private password: string;
    private confirmPassword: string;

    constructor(name: string, email: string, image: string,  password: string, confirmPassword: string) {
        this.name = name;
        this.email = email;
        this.image = image;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}
