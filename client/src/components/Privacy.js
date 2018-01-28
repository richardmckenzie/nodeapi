import React from "react";
import Modal from "react-materialize";
import Button from "react-materialize";

const Privacy = () => {
  return (
    <div>
      <Modal header="Privacy Policy" trigger={<Button>Privacy Policy</Button>}>
        <p>
          By accessing or using the Flo&apos;s Flowers, Web site, you agree to
          the terms of this Online Privacy Policy, as outlined below. If you do
          not agree to these terms, please do not access or use this site.
        </p>

        <p>
          Collection of Personal Information When you engage in certain
          activities on this site, you may be asked to provide certain
          information about yourself by filling out and submitting an online
          form. It is completely optional for you to engage in these activities.
          If you elect to engage in these activities, however, you may be
          required to provide personal information, such as your name, mailing
          address, e-mail address, and other personal identifying information.
          When you submit personal information, you understand and agree that
          Flo&apos;s Flowers may store, and process your information. Flo&apos;s
          Flowers collects this information in order to record and support your
          participation in the activities you select. Flo&apos;s Flowers will
          never sell or share your information with other companies.
        </p>
      </Modal>
    </div>
  );
};

export default Privacy;
