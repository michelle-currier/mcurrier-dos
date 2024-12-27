export default function TermsPage() {
  return (
    <div className="max-w-6xl mx-auto p-8 my-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-center text-indigo-800 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
          Terms of Service
        </h1>
      </div>
      <p className="mb-2 mt-7 text-xl border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
        1. Introduction
      </p>
      <p>
        Welcome to m. currier designs. By engaging our services, you agree to
        comply with and be bound by the following terms and conditions. Please
        review these terms carefully.
      </p>
      <p className="mb-2 mt-7 text-xl border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
        2. Services offered
      </p>
      <p>
        We provide web development services categorized into three packages:
      </p>
      <ul className="mt-2 ml-4 list-disc list-inside text-gray-700">
        <li>
          <b>Basic Site ($450 - $900):</b> Small business sites built with React
          and Next.js, including SendGrid email contact forms.
        </li>
        <li>
          <b>Medium Site ($1000 - $2400):</b> Suitable for small shops,
          e-commerce, and larger portfolios, offering gallery and portfolio
          sites, e-commerce functionality, and up to 20 pages.
        </li>
        <li>
          <b>Large Site ($2500 and up):</b> Complex sites with custom WordPress
          themes and plugins, API integrations, automation, and scheduler &
          booking systems.
        </li>
      </ul>
      <p className="mb-2 mt-7 text-xl border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
        3. Payment Terms
      </p>
      <ul className="mt-2 ml-4 list-disc list-inside text-gray-700">
        <li>
          A down payment of 20% is required to begin development of your
          website.
        </li>
        <li>
          An additional 40% is due upon delivery of the development phase for
          review and agreed updates.
        </li>
        <li>
          New features will be added only after the completion of the first
          build.
        </li>
        <li>
          The final 40% of the outstanding balance is due after the design,
          navigation, and pages have been approved and built. Final payment is
          due regardless of whether all content for the pages has been sent by
          the client.
        </li>
      </ul>
      <p className="mb-2 mt-7 text-xl border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
        4. Access to Source Code
      </p>
      <ul className="mt-2 ml-4 list-disc list-inside text-gray-700">
        <li>
          Upon receipt of full payment, clients will be granted full access to
          the GitHub repository containing their website's source code.
        </li>
        <li>
          This access includes the ability to view, download, and manage the
          code as needed.
        </li>
      </ul>

      <p className="mb-2 mt-7 text-xl border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
        5. Feature Requests and Change Policy
      </p>
      <ul className="mt-2 ml-4 list-disc list-inside text-gray-700">
        <li>
          Clients may request additional features or changes to the project
          scope.
        </li>
        <li>
          Upon receipt of a proposal from the client to change the terms of a
          Statement of Work (a “Change Proposal”), we will promptly provide (a)
          an assessment of the impact of the proposed changes on the cost and
          time required to perform and complete the Services, and (b) any other
          changes to the Statement of Work that would be required as a result of
          the Change Proposal.
        </li>
        <li>
          No Change Proposal will be binding upon either party until agreed upon
          in writing by both parties.
        </li>
      </ul>

      <p className="mb-2 mt-7 text-xl border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
        6. Intellectual Property Rights
      </p>
      <ul className="mt-2 ml-4 list-disc list-inside text-gray-700">
        <li>
          Upon full payment, ownership of the website design, code, and related
          materials will be transferred to the client.
        </li>
        <li>
          We reserve the right to display the completed project as part of our
          portfolio unless otherwise agreed upon.
        </li>
      </ul>

      <p className="mb-2 mt-7 text-xl border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
        7. Confidentiality
      </p>
      <p>
        Both parties agree to maintain the confidentiality of any proprietary
        information shared during the project.
      </p>
      <p className="mb-2 mt-7 text-xl border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
        8. Termination
      </p>
      <ul className="mt-2 ml-4 list-disc list-inside text-gray-700">
        <li>Either party may terminate the agreement with written notice.</li>
        <li>
          In the event of termination, the client agrees to pay for all work
          completed up to the termination date.
        </li>
      </ul>

      <p className="mb-2 mt-7 text-xl border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
        9. Limitation of Liability
      </p>
      <ul className="mt-2 ml-4 list-disc list-inside text-gray-700">
        <li>
          We are not liable for any indirect, incidental, or consequential
          damages arising from the use or inability to use the services
          provided.
        </li>
      </ul>
      <p className="mb-2 mt-7 text-xl border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
        10. Governing Law
      </p>
      <ul className="mt-2 ml-4 list-disc list-inside text-gray-700">
        <li>
          These terms shall be governed by and construed in accordance with the
          laws of the state in which m. currier designs operates, without regard
          to its conflict of law provisions.{" "}
        </li>
      </ul>
      <p className="mt-7">
        By engaging our services, you acknowledge that you have read,
        understood, and agree to be bound by these Terms of Service.
      </p>
    </div>
  );
}
