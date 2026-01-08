export default function Tabs ({buttons, children, ButtonContainter='menu'}) {
  //const ButtonContainter = buttonContainer;
  return(
    <>
      <ButtonContainter>{buttons}</ButtonContainter>
      {children}
    </>
  )
}