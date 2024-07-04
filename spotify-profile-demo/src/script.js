import redirectToAuthCodeFlow from "./redirect-to-auth.js";
import { getAccessToken, fetchProfile, populateUI } from "./get-profile.js";

const clientId = "0d81b9530b804b38bd3eb853d1ad4d7b";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code) {
  redirectToAuthCodeFlow(clientId);
} else {
  const accessToken = await getAccessToken(clientId, code);
  const profile = await fetchProfile(accessToken);
  console.log(profile);
  populateUI(profile);
}
