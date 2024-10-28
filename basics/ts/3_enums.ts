enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard; // 1
const membershipReverse = Membership[2]; // Premium

console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM"
}

const social = SocialMedia.INSTAGRAM; // INSTAGRAM
console.log(social);
