export function createWelcomeEmailTemplate(name, clientURL) {
    return `
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome Email</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f4f4; font-family:'Apple SD Gothic Neo', Arial, sans-serif; color:#333;">
    <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px; margin:40px auto; background-color:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
      <tr>
        <td align="center" bgcolor="#0A84FF" style="padding: 30px;">
          <h1 style="color:#ffffff; margin:0; font-size:28px;">🥭MangoBugi에 오신 걸 환영합니다!</h1>
        </td>
      </tr>

      <tr>
        <td style="padding: 40px 30px;">
          <h2 style="margin-top:0;">안녕하세요, ${name}님 👋</h2>
          <p style="line-height:1.6; font-size:16px;">
            저희 <strong>MangoBugi</strong>에 가입해주셔서 진심으로 감사드립니다.<br/>
            이제부터 다양한 서비스를 이용하실 수 있습니다.
          </p>

          <div style="text-align:center; margin: 40px 0;">
            <a href="${clientURL}" 
              style="display:inline-block; background-color:#0A84FF; color:#ffffff; padding:15px 30px; text-decoration:none; border-radius:8px; font-weight:bold; font-size:16px;">
              지금 시작하기 🚀
            </a>
          </div>

          <p style="line-height:1.6; font-size:15px; color:#555;">
            계정을 활성화하고 MangoBugi의 다양한 기능을 직접 경험해보세요.<br/>
          </p>

          <hr style="margin:30px 0; border:none; border-top:1px solid #eee;"/>

          <p style="font-size:14px; color:#888; line-height:1.4;">
            📩 문의가 필요하신가요?<br/>
            언제든지 <a href="mailto:support@dreamcar.com" style="color:#0A84FF; text-decoration:none;">support@dreamcar.com</a> 으로 연락해주세요.
          </p>
        </td>
      </tr>

      <tr>
        <td align="center" bgcolor="#f8f8f8" style="padding:20px; font-size:13px; color:#aaa;">
          © 2025 DreamCar. All rights reserved.<br/>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}
