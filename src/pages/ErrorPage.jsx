import error from "../assets/What-is-404-error.webp"
const ErrorPage = () => {
    return (
        <div>
            <img src={error} className="max-h-screen w-full object-cover" alt="" />
        </div>
    );
};

export default ErrorPage;