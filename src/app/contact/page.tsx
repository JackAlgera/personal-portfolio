import {FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {StatefulLink} from '../../components/stateful/stateful-link';

export default function Page() {
  return (
    <>
      <h2 className="numbered-heading"><span>05.</span>Contact</h2>
      <section className="flex-col items-center mt-56">
        <p className="text-xl mx-40 text-center">Feel free to get in touch with me on these platforms</p>
        <div className="flex justify-center gap-4 mt-10 mb-10">
          <StatefulLink href="mailto:jack.algera@live.com">
            <HiOutlineMail className="w-14 h-14"/>
          </StatefulLink>
          <StatefulLink href="https://www.linkedin.com/in/jacobus-algera/">
            <FaLinkedin className="w-14 h-14"/>
          </StatefulLink>
        </div>
        {/*<p>If you’ve made it this far, you might as well stay a little bit longer and enjoy the little game:</p>*/}
      </section>
    </>
  );
}
