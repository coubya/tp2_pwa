function Button({onClick, children}: any) {
    return <div className="mx-auto w-[377px] h-[73px] bg-zinc-300 rounded-[20px] flex items-center justify-center" onClick={onClick}>
    {children}
  </div>
}

export default Button