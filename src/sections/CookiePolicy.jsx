const CookiePolicy = () => (
    <div className="container">
        <h2>Information about our use of cookies</h2>

        <p style={styles.text}>
            Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. By continuing to browse the site, you are agreeing to our use of cookie
        </p>

        <p style={styles.text}>
            A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer's hard drive.
        </p>


        <h2>Types of Cookies We Use</h2>

        <ul style={styles.text}>
            <li>
                <strong>Strictly necessary cookies.</strong> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.


            </li>

            <li>
                <strong>Analytical / performance cookies.</strong> They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
            </li>

            <li>
                <strong>Functionality cookies.</strong> These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region).


            </li>
        </ul>

        <p style={styles.text}>
            Please note that third parties (including, for example, our Payment Processor, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control.
        </p>

        <h2>Managing Cookies</h2>

        <p style={styles.text}>
            You block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.
        </p>

        <p style={styles.text}>
            Except for essential cookies, all cookies will expire after 12 months.
        </p>
    </div>
)
const styles = {
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.8",
    },
    title: {
        fontSize: "32px",
        marginBottom: "24px",
    },
    text: {
        color: "#fff",
    },
};
export default CookiePolicy;