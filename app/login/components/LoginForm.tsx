import { login } from "../../actions/auth";

export default async function LoginForm() {
    return (
        <form className="w-[32rem] m-auto fixed top-1/2 left-1/2 transform-[translate(-50%,-50%)] p-[2.4rem] rounded-[3.2rem] neo-panel" action={login}>
            <label className="text-center" htmlFor="login">
                Логин
            </label>
            <input type="text" name="login" id="login" />
            <div className="h-[1.2rem]" />
            <label className="text-center" htmlFor="login">
                Пароль
            </label>
            <input type="password" name="password" id="password" />
            <button className="button w-2/3 p-[1rem] rounded-[2rem] mt-[2rem] m-auto" type="submit">Войти</button>
        </form>
    );
}