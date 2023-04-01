import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
        <section class="same-section-spacing bg-fixed">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-9 col-md-12 ">
                    <div class="bg-error">
                        <div class="error-box">
                            <h1>404</h1>
                            <span>OOOPS !</span>
                            <p>Something Went Wrong. Go Back Home</p>
                            <i>{error.statusText || error.message}</i>
                            <a href="/" class="error-btn">Back To Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}