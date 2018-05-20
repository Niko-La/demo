import React from 'react'
import Link from 'gatsby-link'

import Sample from "../assets/logo.jpg"

const IndexPage = () => (
  <div>
    <h1>GreenON Small and Medium Businesses</h1>

    <div className="avatar" style={{ flexDirection: "column" }}>
            <img
              style={{
                width: "500px",
                borderStyle: "solid",
                borderColor: "#dfdbe5",
                //borderRadius: "100%"
              }}
              src={Sample}
              alt="avatar"
            />
      </div >
   
    <p>No cost energy reviews and funding opportunities for energy saving measures</p>
    <p>Reduce energy costs and greenhouse gas pollution through a no-cost, energy and greenhouse gas emissions assessment that will make your company eligible to secure funding for low-carbon projects that help you save money. Funding is available to small- and medium-sized businesses with projects that contribute measurable reductions to greenhouse gas pollution in buildings and the production of goods.

The GreenON Small and Medium Businesses program is working to increase the competitiveness and sustainability of Ontario’s small- and medium-sized companies, while increasing awareness and understanding of greenhouse gas pollution management strategies. The projects will help Ontario meet its 2020 and 2030 greenhouse gas pollution reduction targets outlined in Ontario’s Climate Change Action Plan..</p>
<form name="submitMeme" netlify-honeypot="bot-field" method="POST" action="/thanks" netlify>

      <p>
        <label>Name: <input type="text" name="name" size="40" /></label>
      </p>
      <p>
        <label>Company: <input type="text" name="name" size="40" /></label>
      </p>
      <p>
        <label>Email: <input type="text" name="email" size="40" /></label>
      </p>
      <p>
        <label>Website: <input type="text" name="memeurl" size="40" /></label>
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
</form>
    
  <h2> CASL and Privacy Compliance </h2>

  <p> 
The information you provide us in the sign-up form (“Sign-up Form”) 
or otherwise in our communications about the GreenON Program (the "Program") will be collected, 
used and disclosed by Ontario Centres of Excellence Inc. (OCE), the Program administrator, 
to assess Program applications including eligibility requirements and to manage, review and administer 
the Program and related services. OCE will handle such information in accordance with its privacy policy, available 
at www.oce-ontario.org/privacy-policy. OCE may share your information with its third party service providers 
for the same purposes. OCE will require its recipient service providers to use such information only for the purposes
 identified above and in accordance with OCE's privacy policy.    </p>
  </div>
)

export default IndexPage
