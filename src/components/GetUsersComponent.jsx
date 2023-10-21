import GetUsersSkillsComponent from './GetUsersSkillsComponent'
import ButtonComponent from './ButtonComponent'

const GetUsersComponent = ({nameUser, lastNameUser, aboutUser, skills}) => {
  const mostrarMensaje = () => {
    alert('Hola');
  }

  return (
    <>
      <h1>Skill Users</h1>
      <p>{nameUser} {lastNameUser}</p>
      <ul>
        {
                    skills.map((nameSkills, index) => {
                      return (
                        <GetUsersSkillsComponent skills={nameSkills} key={index} />
                      )
                    })
                }
        <p>{aboutUser}</p>

      </ul>
      <ButtonComponent comportamiento={mostrarMensaje} />

    </>
  )
}

export default GetUsersComponent
