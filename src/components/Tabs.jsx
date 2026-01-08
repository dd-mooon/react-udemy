export default function Tabs ({buttons,children,buttonContainer}) {
  const ButtonContainter = buttonContainer;
  return(
    <>
      <ButtonContainter>{buttons}</ButtonContainter>
      {children}
    </>
  )
}