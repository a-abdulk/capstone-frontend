import AboutUs from "../EVNpages/AboutUs";

const Contact = () => {
  return (
    <section id="contact">
      <div id="contact" className="row">
        <div className="col-12">
          <h1>Contact</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <a href="">Email</a>.
        </div>

        <div className="col">
          <div className="row">
            <div className="col-6">
              <input type="text" placeholder="First Name" />
            </div>

            <div className="col-6">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <textarea placeholder="What's your message?"></textarea>
          </div>
          <div>
            <button type="button" className="btn btn-primary">
              Send message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
