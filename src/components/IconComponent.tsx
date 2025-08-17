interface IIcon{
    icon: string
}
 const IconComponent = ({icon}:IIcon) => {
  return (
    <img src={icon} width={16} height={16}/>
  )
}
export default IconComponent;