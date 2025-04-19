
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Terms of Use</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
          <p className="text-lg mb-6">
            Last updated: April 19, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Light of Yeshua Ministries website ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, you should not use our website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on Light of Yeshua Ministries' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose or for any public display;</li>
            <li>Attempt to reverse engineer any software contained on Light of Yeshua Ministries' website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
          <p>
            The materials on Light of Yeshua Ministries' website are provided "as is". Light of Yeshua Ministries makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitations</h2>
          <p>
            In no event shall Light of Yeshua Ministries or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Light of Yeshua Ministries' website, even if Light of Yeshua Ministries or a Light of Yeshua Ministries authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Revisions and Errata</h2>
          <p>
            The materials appearing on Light of Yeshua Ministries' website may include technical, typographical, or photographic errors. Light of Yeshua Ministries does not warrant that any of the materials on its website are accurate, complete, or current. Light of Yeshua Ministries may make changes to the materials contained on its website at any time without notice.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Links</h2>
          <p>
            Light of Yeshua Ministries has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Light of Yeshua Ministries of the site. Use of any such linked website is at the user's own risk.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modifications to Terms of Use</h2>
          <p>
            Light of Yeshua Ministries may revise these terms of use for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Use.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at:<br />
            Email: info@lightofyeshua.org<br />
            Or visit our contact page on the website.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
