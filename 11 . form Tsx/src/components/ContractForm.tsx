import { FormEvent, useState } from "react"
import'../style.css'
interface ContractFormData {
    name: string;
    email: string;
}


const ContractForm = () => {
const [formData , setFormData ] = useState<ContractFormData>({
    name: "" ,
    email : ""
})
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name , value} = e.target
        setFormData((prevState) => ({ ...prevState , [name]: value }) )

        
    }


    const handleSubmit =(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Form Submitted " , formData)
    }



    return (
        <form onSubmit={handleSubmit} className="contract-form">
          <div className="form-group">
            <div className="input-group">
              <label>
                Name: 
              </label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
              <label>
                Email: 
              </label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      )
    }

export default ContractForm
