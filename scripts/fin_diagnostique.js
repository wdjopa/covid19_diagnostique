if (!localStorage.getItem("questionscovid19"))
  document.location.href =
    "?page=accueil&err=Vous n'avez pas encore fait de test";

let questions = JSON.parse(localStorage.getItem("questionscovid19"));

if (!questions) {
  document.location.href =
    "?page=accueil&err=Vous n'avez pas encore fait de test";
}
let score = 0,
  total = 0;
let symptomes = [];
let pronostiques = [];
let gmineur = [],
  gmajeur = [];
let caracteristiques = JSON.parse(localStorage.getItem("caracteristiques"));

conclusion();
function conclusion() {
  let resultat = 0;
  questions.forEach((question) => {
    if (question.rep == question.answer) {
      resultat += question.level;
    }
    // console.log("Resultat", resultat);
  });

  if (resultat >= 0 && resultat <= 2) {
    $(".resultat .avis").html(
      "VOUS SEMBLEZ <span class='text-success'>NE PRESENTER AUCUN SIGNE</span>"
    );
    // $(".resultat .message").html("");
    $(".resultat .precision").html(
      `Nous vous invitons à rester chez vous et à continuer à prendre soin de votre santé. Dès les premiers symptômes, contactez le <a class="text-danger bold" href="tel:1510">1510</a>.<br>Restez chez vous au maximum en attendant que les symptômes disparaissent.
  Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
    );
    $(".resultat .img").attr("src", "images/diagnosis.svg");
  } else if (resultat >= 3 && resultat <= 5) {
    $(".resultat .avis").html(
      "<span class='text-success'>REFAITES LE TEST DANS 2 JOURS</span>"
    );
    // $(".resultat .message").html(message);
    $(".resultat .precision").html(
      `Nous vous invitons à rester chez vous et à continuer à prendre soin de votre santé. Buvez constamment de l'eau et ayez une bonne hygiène pour écarter tout risque. Dès les premiers symptômes, contactez le <a class="text-danger bold" href="tel:1510">1510</a>.<br>Restez chez vous au maximum en attendant que les symptômes disparaissent.
  Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
    );
    $(".resultat .img").attr("src", "images/diagnosis.svg");
  } else if (resultat >= 6 && resultat <= 12) {
    // $(".resultat .message").html(message);
    $(".resultat .avis").html(
      "VOUS SEMBLEZ <span class='text-success'>PRESENTER QUELQUES SIGNES</span>"
    );
    $(".resultat .precision")
      .html(`Nous vous conseillons d'effectuer une consultation médicale. Vous pouvez contacter des médecins en cliquant sur les boutons Whatsapp qui sont situés à droite. Des medecins reviendrons vers vous le plus rapidement possible. <br> Vous pouvez également appeler
le 1510 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant
plus de 24h apparaissent.<br>Restez chez vous au maximum en attendant que les symptômes disparaissent.
Prenez votre température deux fois par jour. Rappel des mesures d’hygiène`);
    $(".resultat .img").attr("src", "images/hand-wash.svg");
  } else {
    $(".resultat .img").attr("src", "images/virus (1).svg");
    $(".resultat .avis").html(
      "<span class='text-danger'> BESOIN DE SOINS EN URGENCE</span>"
    );
    $(".resultat .message").html(
      `Aussi vite que vous le pouvez, contactez les numéros suivants : 
      <ul>
      <li><a href="tel:1510">1510</a></li>
      <li><a href="tel:677 89 93 69">677 89 93 69</a></li>
      <li><a href="tel:677 89 43 64">677 89 43 64</a></li>
      <li><a href="tel:677 89 76 44">677 89 76 44</a></li>
      <li><a href="tel:677 90 01 57">677 90 01 57</a></li>
      </ul>
      Pour vous signaler auprès des autorités sanitaires compétentes afin de pouvoir vous prendre en charge rapidement. `
    );
    casurgent(resultat);
  }
}

function casurgent(resultat) {
  let sent = localStorage.getItem("email_sent");
  if(sent == null || (parseInt(sent) + 1000 * 3600 * 48 <= Date.now())){
    $.post("https://lamater.tech:2002/sendmail", {
      to: "wilfried.djopa@gmail.com",
      subject: "Cas suspect grave de Covid-19 signalé - "+resultat+"/24",
      html: email(caracteristiques),
    });
    localStorage.setItem("email_sent", Date.now())
  }else{
    console.log("deja envoyé")
  }
}

function email(personne) {
  return `
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width" name="viewport"/>
<!--[if !mso]><!-->
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<!--<![endif]-->
<title></title>
<!--[if !mso]><!-->
<!--<![endif]-->
<style type="text/css">
		body {
			margin: 0;
			padding: 0;
		}

		table,
		td,
		tr {
			vertical-align: top;
			border-collapse: collapse;
		}

		* {
			line-height: inherit;
		}

		a[x-apple-data-detectors=true] {
			color: inherit !important;
			text-decoration: none !important;
		}
	</style>
<style id="media-query" type="text/css">
		@media (max-width: 660px) {

			.block-grid,
			.col {
				min-width: 320px !important;
				max-width: 100% !important;
				display: block !important;
			}

			.block-grid {
				width: 100% !important;
			}

			.col {
				width: 100% !important;
			}

			.col>div {
				margin: 0 auto;
			}

			img.fullwidth,
			img.fullwidthOnMobile {
				max-width: 100% !important;
			}

			.no-stack .col {
				min-width: 0 !important;
				display: table-cell !important;
			}

			.no-stack.two-up .col {
				width: 50% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num8 {
				width: 66% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num3 {
				width: 25% !important;
			}

			.no-stack .col.num6 {
				width: 50% !important;
			}

			.no-stack .col.num9 {
				width: 75% !important;
			}

			.video-block {
				max-width: none !important;
			}

			.mobile_hide {
				min-height: 0px;
				max-height: 0px;
				max-width: 0px;
				display: none;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide {
				display: block !important;
				max-height: none !important;
			}
		}
	</style>
</head>
<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #f1f4f8;">
<!--[if IE]><div class="ie-browser"><![endif]-->
<table bgcolor="#f1f4f8" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f1f4f8; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top;" valign="top">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#f1f4f8"><![endif]-->
<div style="background-color:transparent;">
<div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
<div style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<div class="mobile_hide">
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 30px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 1px solid #F3F2F3; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
<div style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:1px solid #F3F2F3; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 15px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<div align="center" class="img-container center fixedwidth" style="padding-right: 20px;padding-left: 20px;">
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 20px;padding-left: 20px;" align="center"><![endif]-->
<div style="font-size:1px;line-height:20px"> </div><img align="center" alt="Image" border="0" class="center fixedwidth" src="https://lamater.tech/covid19/images/virus.svg" style="text-decoration: none; -ms-interpolation-mode: bicubic; border: 0; height: auto; width: 100%; max-width: 128px; display: block;" title="Image" width="128"/>
<div style="font-size:1px;line-height:20px"> </div>
<!--[if mso]></td></tr></table><![endif]-->
</div>
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 18px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
<div style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 20px; padding-bottom: 15px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.2;padding-top:20px;padding-right:40px;padding-bottom:15px;padding-left:40px;">
<div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14px;">
<p style="font-size: 16px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 19px; margin: 0;"><span style="color: #003188;"><span style="font-size: 46px;"><strong>Un cas mérite votre attention</strong></span></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 15px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:15px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
<div style="line-height: 1.5; font-size: 12px; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; mso-line-height-alt: 18px;">
<p style="line-height: 1.5; word-break: break-word; font-family: inherit; mso-line-height-alt: NaNpx; margin: 0;"><span style="background-color: transparent;"><span style="color: #6d89bc;"><span style="font-size: 16px;">Bonjour, Bonsoir, </span></span></span></p>
<p style="line-height: 1.5; word-break: break-word; font-family: inherit; mso-line-height-alt: NaNpx; margin: 0;"><span style="background-color: transparent;"> </span></p>
<p style="line-height: 1.5; word-break: break-word; font-family: inherit; font-size: 16px; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px; color: #6d89bc;">Une personne a utilisé notre application : https://lamater.tech/covid19 et signale des symptômes qui peuvent faire penser à un cas de COVID19.<br/></span><span style="font-size: 16px; color: #6d89bc;"><span style="font-size: 12px; color: #555555; background-color: transparent;"> </span><br/></span></p>
<p style="line-height: 1.5; word-break: break-word; font-family: inherit; font-size: 16px; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px; color: #6d89bc;">Ses informations sont :</span></p>
<ul>
<li style="line-height: 1.5; word-break: break-word; font-size: 17px; mso-line-height-alt: 26px; mso-ansi-font-size: 18px;"><span style="font-size: 17px; color: #3366ff; mso-ansi-font-size: 18px;">Age : ${personne.age}</span></li>
<li style="line-height: 1.5; word-break: break-word; font-size: 17px; mso-line-height-alt: 26px; mso-ansi-font-size: 18px;"><span style="font-size: 17px; color: #3366ff; mso-ansi-font-size: 18px;">Tel : ${personne.contact_personnel}</span></li>
<li style="line-height: 1.5; word-break: break-word; font-size: 17px; mso-line-height-alt: 26px; mso-ansi-font-size: 18px;"><span style="font-size: 17px; color: #3366ff; mso-ansi-font-size: 18px;">Personne à contacter : ${personne.personne_a_contacter}</span></li>
<li style="line-height: 1.5; word-break: break-word; font-size: 17px; mso-line-height-alt: 26px; mso-ansi-font-size: 18px;"><span style="font-size: 17px; color: #3366ff; mso-ansi-font-size: 18px;">Adresse personnelle : ${personne.quartier}</span></li>
<li style="line-height: 1.5; word-break: break-word; mso-line-height-alt: NaNpx;"><span style="color: #3366ff;"><span style="font-size: 17px; mso-ansi-font-size: 18px;">Adresse professionnelle : ${personne.adresse_professionnelle} </span></span></li>
</ul>
<p style="line-height: 1.5; word-break: break-word; font-family: inherit; mso-line-height-alt: NaNpx; margin: 0;"> </p>
<p style="line-height: 1.5; word-break: break-word; font-family: inherit; mso-line-height-alt: NaNpx; margin: 0;"> </p>
<p style="line-height: 1.5; word-break: break-word; font-family: inherit; font-size: 16px; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px; color: #6d89bc;">Nous vous laissons cette information afin que vous puissiez en faire ce qu'il y'a de mieux.<br/><br/>Nous restons disponible si vous souhaitez en répondant à ce mail.</span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 30px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 20px; padding-bottom: 10px; font-family: Tahoma, sans-serif"><![endif]-->
<div style="color:#555555;font-family:Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;line-height:1.5;padding-top:20px;padding-right:40px;padding-bottom:10px;padding-left:40px;">
<div style="line-height: 1.5; font-size: 12px; font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; color: #555555; mso-line-height-alt: 18px;">
<p style="line-height: 1.5; word-break: break-word; font-family: inherit; font-size: 16px; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px; color: #6d89bc;">Cordialement,</span></p>
<p style="line-height: 1.5; word-break: break-word; font-family: inherit; mso-line-height-alt: NaNpx; margin: 0;"> </p>
<p style="line-height: 1.5; word-break: break-word; font-family: inherit; font-size: 16px; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 16px; color: #6d89bc;">#Makers Against COVID19 in Cameroon</span></p>
<p style="line-height: 1.5; word-break: break-word; font-family: inherit; mso-line-height-alt: NaNpx; margin: 0;"> </p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 60px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 1px solid #E5EAF3; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
<div style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:1px solid #E5EAF3; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 35px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
<table align="center" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
<tbody>
<tr align="center" style="vertical-align: top; display: inline-block; text-align: center;" valign="top">
<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 4px; padding-left: 4px;" valign="top"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="https://lamater.tech/covid19/images/facebook2x.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;" title="Facebook" width="32"/></a></td>
<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 4px; padding-left: 4px;" valign="top"><a href="https://twitter.com/covid19CMR" target="_blank"><img alt="Twitter" height="32" src="https://lamater.tech/covid19/images/twitter2x.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;" title="Twitter" width="32"/></a></td>
<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 4px; padding-left: 4px;" valign="top"><a href="https://lamater.tech/covid19" target="_blank"><img alt="Instagram" height="32" src="https://lamater.tech/covid19/images/share.svg" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;" title="Instagram" width="32"/></a></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 40px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent;">
<div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
<div style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<div class="mobile_hide">
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 30px; padding-right: 10px; padding-bottom: 0px; padding-left: 10px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid #BBBBBB; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<!--[if (IE)]></div><![endif]-->
</body>
</html>`;
}
/*
if (caracteristiques.age - 0 >= 70) {
  pronostiques.push("age avancé");
} else {
  if (caracteristiques.age <= 15) {
    alert(` Prenez contact avec votre médecin généraliste au moindre
doute. Cette application n’est pour l’instant pas adaptée aux personnes de
moins de 15 ans. En cas d’urgence, appeler le 1510.`);
    document.location.href = "?page=accueil";
  }
}
if (
  caracteristiques.poids /
    (caracteristiques.taille * caracteristiques.taille) >=
  30
) {
  pronostiques.push("IMC important");
}
console.log(questions);

questions.forEach(question => {
  if (
    question.question.includes("toux", "gorge", "mal de gorge") &&
    question.rep == question.answer
  ) {
    symptomes.push("toux");
  }
  if (
    question.question.includes("vre", "sueurs froides") &&
    question.rep == question.answer
  ) {
    symptomes.push("fievre");
  } else {
    if (question.rep == question.answer) {
      gmineur.push(question);
    } else {
      gmajeur.push(question);
    }
  }
  if (
    question.question.includes("fatigue", "courbatures") &&
    question.rep == question.answer
  ) {
    symptomes.push("fatigue");
    gmineur.push(question);
  }
  if (question.question.includes("diarrh") && question.rep == question.answer) {
    symptomes.push("diarrh");
  }
  if (
    question.question.includes("alimenter") &&
    question.rep == question.answer
  ) {
    symptomes.push("aliment");
    gmajeur.push(question);
  }

  if (question.question.includes("gorge") && question.rep == question.answer) {
    symptomes.push("gorge");
    // gmajeur.push(question);
  }
  if (
    question.question.includes("ne respiratoire") &&
    question.rep == question.answer
  ) {
    // gene respiratoire
    symptomes.push("odorat");
    // symptomes.push("gene respiratoire");
    gmajeur.push(question);
  }
  if (
    question.question.includes("hypertension") &&
    question.rep == question.answer
  ) {
    pronostiques.push(question);
  }
  if (question.question.includes("diab") && question.rep == question.answer) {
    pronostiques.push(question);
  }
  if (question.question.includes("cancer") && question.rep == question.answer) {
    pronostiques.push(question);
  }
  if (
    question.question.includes("maladie respiratoire") &&
    question.rep == question.answer
  ) {
    pronostiques.push(question);
  }
  if (
    question.question.includes("nale chronique dialys") &&
    question.rep == question.answer
  ) {
    pronostiques.push(question); // rénale chronique dialysé
  }

  if (
    question.question.includes("chronique du foie") &&
    question.rep == question.answer
  ) {
    pronostiques.push(question);
  }

  if (
    question.question.includes("enceinte") &&
    question.rep == question.answer
  ) {
    pronostiques.push(question);
  }

  if (
    question.question.includes("fenses immunitaires") &&
    question.rep == question.answer
  ) {
    pronostiques.push(question);
  }

  if (
    question.question.includes("immunosuppresseur") &&
    question.rep == question.answer
  ) {
    pronostiques.push(question);
  }

  score += question.rep == question.answer ? 1 * question.level : 0;
  total += 1 * question.level;
});

// Algo décisionnel
console.log("symptomes",symptomes);
console.log("mineurs", gmineur);
console.log("majeurs", gmajeur);
console.log("pronostiques", pronostiques);

if (symptomes.includes("fievre") && symptomes.includes("toux")) {
  if (
    pronostiques.length == 0 ||
    (gmineur.length >= 1 && gmajeur.length == 0)
  ) {
    milieu(
      "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
    );
  } else {
    if (gmineur.length == 0 && gmajeur.length == 0) {
      milieu(
        "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
      );
    } else if (gmineur.length == 1) {
      milieu(
        "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
      );
    } else if (gmineur.length == 2) {
      milieu(
        " CS MG ou téléCs et si pas possible de le joindre ou téléCS : faite le 1510 "
      );
    } else if (gmajeur.length >= 1) {
      malade(" Appeler le 1510");
    }
  }
} // ELSE IF
else if (
  symptomes.includes("fievre") ||
  (symptomes.includes("toux") && symptomes.includes("gorge")) ||
  (symptomes.includes("toux") && symptomes.includes("odorat")) ||
  (symptomes.includes("fievre") && symptomes.includes("diarrh"))
) {
  if (pronostiques.length == 0) {
    if (
      gmineur.length == 0 &&
      gmajeur.length == 0 &&
      caracteristiques.age < 50
    ) {
      sain(
        " nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes."
      );
    } else if (
      (gmineur.length == 0 &&
        gmajeur.length == 0 &&
        caracteristiques.age >= 50 &&
        caracteristiques.age < 69) ||
      gmineur.length >= 1
    ) {
      milieu(
        "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
      );
    }
    else{
         milieu(
           "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
         );
    }
  } else {
    if (gmineur.length == 0 && gmajeur.length == 0) {
      milieu(
        "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
      );
    } else if (gmineur.length == 1) {
      milieu(
        "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
      );
    } else if (gmineur.length == 2) {
      milieu(
        " CS MG ou téléCs et si pas possible de le joindre ou téléCS : faite le 1510 "
      );
    } else if (gmajeur.length >= 1) {
      malade(" Appeler le 1510");
    } else {
      milieu(
        "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
      );
    }
  }
} else if (symptomes.includes("toux", "gorge", "odorat")) {
  if (gmineur.length == 0 && gmajeur.length == 0) {
    sain(
      `Votre situation ne relève probablement pas du Covid-19. Consultez votre
médecin au moindre doute. Si de nouveaux symptomes apparaissent, refaites le
test. `
    );
  } else if (
    gmineur.length >= 1 ||
    gmajeur.length >= 1 ||
    pronostiques.length >= 1
  ) {
    sain(
      `Votre situation ne relève probablement pas du Covid-19. Un avis médical est
recommandé. Au moindre doute, appelez le 1510.  `
    );
  }else{
      sain(
        `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre
médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour
réévaluer la situation. `
      );
  }
} else if (symptomes.length == 0) {
  sain(
    `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre
médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour
réévaluer la situation. `
  );
}else{
    
         milieu(
           "téléconsultation ou médecin généraliste ou visite à domicile (SOS médecins…) "
         );
}

function sain(message) {
  $(".resultat .avis").html(
    "VOUS SEMBLEZ <span class='text-success'>NE PRESENTER AUCUN SIGNE</span>"
  );
  $(".resultat .message").html(message);
  $(".resultat .precision").html(
    `Nous vous invitons à rester chez vous et à continuer à prendre soin de votre santé. Dès les premiers symptômes, contactez le <a class="text-danger bold" href="tel:1510">1510</a>.<br>Restez chez vous au maximum en attendant que les symptômes disparaissent.
Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
  );
  $(".resultat .img").attr("src", "images/diagnosis.svg");
}
function milieu(message) {
  $(".resultat .message").html(message);
  $(".resultat .avis").html(
    "VOUS SEMBLEZ <span class='text-success'>PRESENTER QUELQUES SIGNES</span>"
  );
  $(".resultat .precision").html(`appelez
le 1510 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant
plus de 24h apparaissent.<br>Restez chez vous au maximum en attendant que les symptômes disparaissent.
Prenez votre température deux fois par jour. Rappel des mesures d’hygiène`);
  $(".resultat .img").attr("src", "images/hand-wash.svg");
}
function malade(message) {
  $(".resultat .img").attr("src", "images/virus (1).svg");
  $(".resultat .avis").html("<span class='text-danger'>" + message + "</span>");
  $(".resultat .message")
    .html(`<br>Restez chez vous au maximum en attendant que les symptômes disparaissent.
Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`);
}
*/

function share() {
  copyToClipboard();
}
function copyToClipboard() {
  let url = "https://lamater.tech/covid19";
  let selBox = document.createElement("textarea");

  selBox.style.position = "fixed";
  selBox.style.left = "0";
  selBox.style.top = "0";
  selBox.style.opacity = "0";
  selBox.value = url;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  selBox.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  document.body.removeChild(selBox);
  alert("Lien copié");
}
