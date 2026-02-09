export async function getCertifications() {
  const CREDLY_URL = "https://www.credly.com/users/dipankar-medhi/badges.json";

  try {
    const response = await fetch(CREDLY_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch certifications: ${response.statusText}`);
    }

    const json = await response.json();

    // The structure returned by Credly's badges.json is usually:
    // { data: [ { badge_template: { name, image_url, ... }, issued_at, ... }, ... ] }
    return json.data.map((item) => ({
      id: item.id,
      name: item.badge_template.name,
      issuer: item.issuer.entities[0].entity.name,
      image: item.badge_template.image_url,
      url: `https://www.credly.com/badges/${item.id}/public_url`,
      issuedAt: item.issued_at,
      expiresAt: item.expires_at,
    }));
  } catch (error) {
    console.error("Error fetching Credly certifications:", error);
    return [];
  }
}
