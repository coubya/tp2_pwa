import Button from "./Button";

 function Login({onClick, children}: any) {
    return (
        <div>
        <div className="w-[673px] h-[499px] bg-neutral-700 rounded-[20px] flex items-center justify-center">
          <div className="text-center">
            <img className="mx-auto" src="/bowser.webp" />
            <p className="text-white text-[32px] font-normal font-['Helvetica Neue']">Hey pas si vite ! Vous n'êtes pas connecté !</p>
            <Button onClick={onClick}>
              <p className="text-black text-[32px] font-normal font-['Helvetica Neue']">Se Connecter</p>
            </Button>
          </div>
        </div>
      </div>
    )
}
export default Login