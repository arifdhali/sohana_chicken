const ForgotEmailTemplate = (resetLink) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Reset Your Password</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f5f7f4;
      font-family: Arial, Helvetica, sans-serif;
      color: #333;
    }

    .email-wrapper {
      width: 100%;
      padding: 30px 0;
    }

    .email-container {
      max-width: 600px;
      margin: auto;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }

    .header {
      padding: 20px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      color: #2e7d32;
    }

    .banner img {
      max-width: 100%;
      height: 300px;
      object-fit: cover;
      display: block;
    }

    .content {
      padding: 30px 40px;
      text-align: center;
    }

    .content h1 {
      margin: 0 0 15px;
      font-size: 22px;
      color: #1b1b1b;
    }

    .content p {
      font-size: 14px;
      line-height: 1.6;
      color: #555;
      margin-bottom: 25px;
    }

    .btn {
      display: inline-block;
      background: #19c600;
      color: #ffffff !important;
      padding: 14px 28px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;
    }

    .divider {
      height: 1px;
      background: #eaeaea;
      margin: 30px 0;
    }

    .footer-text {
      font-size: 12px;
      color: #777;
      line-height: 1.5;
    }

    .link-box {
      background: #f6f6f6;
      padding: 12px;
      border-radius: 6px;
      word-break: break-all;
      font-size: 12px;
      margin-top: 10px;
    }

    .link-box a {
      color: #19c600;
      text-decoration: none;
    }
  </style>
</head>

<body>
  <div class="email-wrapper">
    <div class="email-container">

      <div class="header">
        🚜 Green Acres
      </div>

      <div class="banner">
        <img
          height:200;
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Green Acres Farm"
        />
      </div>

      <div class="content">
        <h1>Trouble logging in?</h1>

        <p>
          Hello, we received a request to reset the password for your farm
          account at <strong>Green Acres</strong>. If you made this request,
          please click the button below to choose a new password.
        </p>

        <a href="${resetLink}" class="btn">Reset Password</a>

        <div class="divider"></div>

        <p class="footer-text">
          If you did not request a password reset, you can safely ignore this
          email. Your password will not change until you create a new one.
        </p>

        <p class="footer-text"><strong>Link not working?</strong></p>

        <div class="link-box">
          <a href="${resetLink}">${resetLink}</a>
        </div>
      </div>

    </div>
  </div>
</body>
</html>
`;
};

export default ForgotEmailTemplate;
