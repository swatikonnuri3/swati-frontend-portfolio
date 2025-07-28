import { CONTACT } from "../constants"
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl text-white">Get in Touch</h2>
        <div className="text-center tracking-tighter text-white">
            <p className="my-4">{CONTACT.address}</p>
            <a href="#" className=" my-2 border-b">{CONTACT.email}</a><br />
            <a href="#" className="border-b">{CONTACT.GitHub}</a><br />
        </div>
    </div>
  )
}

export default Contact