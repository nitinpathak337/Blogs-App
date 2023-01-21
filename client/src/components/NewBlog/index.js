import { Link } from "react-router-dom";
import BlogContext from "../../context/BlogContext";
import "./index.css";

//Publish Blog Screen Route
const NewBlog = () => {
  return (
    <BlogContext.Consumer>
      {(value) => {
        const {
          title,
          content,
          changeTitle,
          changeContent,
          publishBlog,
        } = value;

        const onChangeTitle = (event) => {
          changeTitle(event.target.value);
        };

        const onChangeContent = (event) => {
          changeContent(event.target.value);
        };

        const onPublishBlog = () => {
          publishBlog();
        };

        return (
          <div className="bg">
            <nav className="navbar">
              <h1 className="heading">Eqaim Blog</h1>
            </nav>
            <div className="blog-post-content">
              <div>
                <Link to="/" className="home-icon-container">
                  <svg
                    width="42"
                    height="54"
                    viewBox="0 0 42 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 27L21 1L41 27"
                      stroke="#000001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.15385 33V53H34.8462V33"
                      stroke="#000001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <button
                  className="home-icon-container publish-button"
                  type="button"
                  onClick={onPublishBlog}
                >
                  <svg
                    width="80"
                    height="70"
                    viewBox="0 0 80 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="80" height="70" rx="20" fill="#E9E9E9" />
                    <path
                      d="M50 13H56C57.0609 13 58.0783 13.4214 58.8284 14.1716C59.5786 14.9217 60 15.9391 60 17V57C60 58.0609 59.5786 59.0783 58.8284 59.8284C58.0783 60.5786 57.0609 61 56 61H24C22.9391 61 21.9217 60.5786 21.1716 59.8284C20.4214 59.0783 20 58.0609 20 57V17C20 15.9391 20.4214 14.9217 21.1716 14.1716C21.9217 13.4214 22.9391 13 24 13H30"
                      stroke="#000001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M46 9H34C31.7909 9 30 10.7909 30 13V15C30 17.2091 31.7909 19 34 19H46C48.2091 19 50 17.2091 50 15V13C50 10.7909 48.2091 9 46 9Z"
                      stroke="#000001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30 41L38 47L48 31"
                      stroke="#000001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="input-container">
                <div className="text-options">
                  <div className="options-container">
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6667 4.6C11.6667 3.64522 11.2452 2.72955 10.4951 2.05442C9.74495 1.37928 8.72753 1 7.66667 1H2.33333C1.97971 1 1.64057 1.12643 1.39052 1.35147C1.14048 1.57652 1 1.88174 1 2.2V8.2H7.66667C8.72753 8.2 9.74495 7.82071 10.4951 7.14558C11.2452 6.47045 11.6667 5.55478 11.6667 4.6Z"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 12.4C13 13.5139 12.5083 14.5822 11.6332 15.3698C10.758 16.1575 9.57101 16.6 8.33333 16.6H2.33333C1.97971 16.6 1.64057 16.4736 1.39052 16.2485C1.14048 16.0235 1 15.7183 1 15.4V8.2H8.33333C9.57101 8.2 10.758 8.6425 11.6332 9.43015C12.5083 10.2178 13 11.2861 13 12.4Z"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 16.6L9.5 1"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.5 1H13"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 16.6H8.5"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.09094 1V9.1C2.09094 10.4526 2.57942 11.7498 3.4489 12.7062C4.31839 13.6627 5.49767 14.2 6.72731 14.2V14.2C7.33616 14.2 7.93906 14.0681 8.50157 13.8118C9.06407 13.5555 9.57518 13.1798 10.0057 12.7062C10.4362 12.2327 10.7777 11.6704 11.0107 11.0517C11.2437 10.4329 11.3637 9.76974 11.3637 9.1V1"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 16.6H13"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.84311 10.804C10.0666 11.1429 10.2345 11.5375 10.3364 11.9637C10.4383 12.3898 10.4722 12.8386 10.4359 13.2824C10.3996 13.7262 10.2939 14.1557 10.1253 14.5445C9.95668 14.9333 9.72873 15.2732 9.45542 15.5433C8.73078 16.1862 7.88149 16.5508 7.00482 16.5954C6.12815 16.6399 5.25954 16.3626 4.49849 15.7953L3.66772 15.1834"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.76917 1.9854C7.92301 0.797583 4.44301 0.0896917 3.6584 3.44918C3.54531 3.94152 3.53265 4.46362 3.62166 4.96424C3.71066 5.46487 3.89828 5.92681 4.16609 6.30474C4.90186 7.0518 5.70847 7.67279 6.56609 8.15246"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 8.20045H13"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 16.6H13"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.51367 13.6014L6.53829 1.40306C6.5757 1.2839 6.63958 1.18192 6.72178 1.11013C6.80398 1.03834 6.90078 1 6.99983 1C7.09887 1 7.19567 1.03834 7.27787 1.11013C7.36007 1.18192 7.42395 1.2839 7.46136 1.40306L11.486 13.6014"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.29517 8.2039H9.7044"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.6 2.2C1.93137 2.2 2.2 1.93137 2.2 1.6C2.2 1.26863 1.93137 1 1.6 1C1.26863 1 1 1.26863 1 1.6C1 1.93137 1.26863 2.2 1.6 2.2Z"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.80005 1.60001H16.6"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.6 7.59999C1.93137 7.59999 2.2 7.33136 2.2 6.99999C2.2 6.66862 1.93137 6.39999 1.6 6.39999C1.26863 6.39999 1 6.66862 1 6.99999C1 7.33136 1.26863 7.59999 1.6 7.59999Z"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.80005 7H16.6"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.6 13C1.93137 13 2.2 12.7314 2.2 12.4C2.2 12.0686 1.93137 11.8 1.6 11.8C1.26863 11.8 1 12.0686 1 12.4C1 12.7314 1.26863 13 1.6 13Z"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.80005 12.4H16.6"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.59099 9.49402L1.38736 13.999C1.26462 14.1307 1.1672 14.2874 1.10071 14.46C1.03423 14.6326 1 14.8178 1 15.0048C1 15.1918 1.03423 15.377 1.10071 15.5496C1.1672 15.7223 1.26462 15.879 1.38736 16.0107L4.16359 19.014C4.28533 19.1468 4.43016 19.2522 4.58974 19.3241C4.74932 19.396 4.92048 19.433 5.09336 19.433C5.26623 19.433 5.4374 19.396 5.59698 19.3241C5.75656 19.2522 5.90139 19.1468 6.02313 19.014L10.1875 14.4665"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.4483 10.939L17.6126 6.43402C17.7354 6.30233 17.8328 6.14564 17.8993 5.97301C17.9658 5.80038 18 5.61521 18 5.4282C18 5.24118 17.9658 5.05601 17.8993 4.88338C17.8328 4.71075 17.7354 4.55406 17.6126 4.42237L14.8757 1.41905C14.754 1.28626 14.6091 1.18087 14.4495 1.10895C14.29 1.03703 14.1188 1 13.9459 1C13.773 1 13.6019 1.03703 13.4423 1.10895C13.2827 1.18087 13.1379 1.28626 13.0161 1.41905L8.85181 5.96653"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.1388 7.38319L6.90063 13.0498"
                        stroke="#000001"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Enter your blog's title here"
                  className="title-input"
                  value={title}
                  onChange={onChangeTitle}
                />
                <textarea
                  className="content-input"
                  rows="15"
                  placeholder="Enter your blog's content here"
                  value={content}
                  onChange={onChangeContent}
                />
              </div>
            </div>
          </div>
        );
      }}
    </BlogContext.Consumer>
  );
};

export default NewBlog;
