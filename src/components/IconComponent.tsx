interface IIcon{
    icon: string
}
 const IconComponent = ({icon}:IIcon) => {
  return (
    <img src={icon} />
  )
}
export default IconComponent;