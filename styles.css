:root {
  --black: #090b0c;
  --plomo: #171a1c;
  --plomo-soft: #23272a;
  --gray: #6f7478;
  --white: #f3f4ef;
  --yellow: #ffd200;
  --yellow-deep: #f5c400;
  --line: rgba(243, 244, 239, 0.18);
  --line-soft: rgba(243, 244, 239, 0.09);
  --shadow: 0 28px 80px rgba(0, 0, 0, 0.62);
}

* {
  box-sizing: border-box;
}

html {
  min-height: 100%;
}

body {
  min-height: 100vh;
  margin: 0;
  background:
    linear-gradient(90deg, rgba(255, 210, 0, 0.035) 1px, transparent 1px),
    linear-gradient(0deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    linear-gradient(145deg, #060708 0%, #15191b 52%, #080a0b 100%);
  background-size: 24px 24px, 24px 24px, auto;
  color: var(--white);
  font-family: "Segoe UI", Arial, sans-serif;
  line-height: 1.35;
  letter-spacing: 0;
}

body::before {
  position: fixed;
  inset: 0;
  z-index: -1;
  content: "";
  pointer-events: none;
  background:
    linear-gradient(90deg, transparent 0 22%, rgba(255, 210, 0, 0.06) 22% 22.5%, transparent 22.5%),
    radial-gradient(circle at 50% 0%, rgba(255, 210, 0, 0.08), transparent 34rem);
}

a {
  color: inherit;
  text-decoration: none;
}

img,
canvas,
svg {
  display: block;
}

.page-shell {
  display: grid;
  min-height: 100vh;
  align-items: start;
  justify-items: center;
  padding: 18px 14px;
}

.phone-card {
  position: relative;
  width: min(100%, 430px);
  min-height: 720px;
  padding: 28px 26px 24px;
  overflow: hidden;
  border: 2px solid var(--yellow);
  border-radius: 34px;
  background:
    linear-gradient(90deg, rgba(255, 210, 0, 0.045) 1px, transparent 1px),
    linear-gradient(0deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(180deg, rgba(38, 42, 44, 0.95), rgba(12, 14, 15, 0.98));
  background-size: 20px 20px, 20px 20px, auto;
  box-shadow: var(--shadow);
}

.phone-card::before {
  position: absolute;
  inset: 10px;
  border: 1px solid rgba(255, 210, 0, 0.12);
  border-radius: 26px;
  content: "";
  pointer-events: none;
}

.speaker {
  width: 78px;
  height: 8px;
  margin: 0 auto 20px;
  border-radius: 999px;
  background: var(--white);
  box-shadow: inset 0 -2px 4px rgba(0, 0, 0, 0.26), 0 0 0 1px rgba(255, 255, 255, 0.34);
}

.side-accent {
  position: absolute;
  top: 72px;
  right: 18px;
  width: 12px;
  height: 126px;
  border-radius: 2px;
  background: linear-gradient(180deg, var(--yellow), var(--yellow-deep));
}

.profile {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  text-align: center;
}

.photo-ring {
  width: 178px;
  height: 178px;
  padding: 7px;
  border-radius: 50%;
  background: linear-gradient(180deg, var(--yellow), var(--yellow-deep));
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.46);
}

.photo-ring img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: 52% 38%;
}

.kicker {
  margin: 16px 0 4px;
  color: var(--yellow);
  font-size: 0.93rem;
  font-weight: 900;
  text-transform: uppercase;
}

h1,
h2,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 8px;
  color: var(--white);
  font-size: clamp(1.98rem, 8.45vw, 2.68rem);
  font-weight: 900;
  line-height: 0.98;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.55);
}

.profession {
  max-width: 350px;
  margin-bottom: 22px;
  color: rgba(243, 244, 239, 0.88);
  font-size: clamp(0.98rem, 4.1vw, 1.12rem);
  font-weight: 500;
}

.actions {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 9px;
}

.action-link {
  display: grid;
  grid-template-columns: 46px minmax(0, 1fr) 24px;
  align-items: center;
  min-height: 58px;
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.03)),
    rgba(26, 29, 31, 0.88);
  color: var(--white);
  font-size: 1.18rem;
  font-weight: 800;
  text-align: center;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.48);
  transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
}

.action-link:hover,
.action-link:focus-visible {
  border-color: rgba(255, 210, 0, 0.78);
  background:
    linear-gradient(180deg, rgba(255, 210, 0, 0.12), rgba(255, 255, 255, 0.035)),
    rgba(28, 31, 33, 0.96);
  outline: none;
  transform: translateY(-2px);
}

.icon-box {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  color: var(--yellow);
}

.icon-box svg {
  width: 34px;
  height: 34px;
  fill: currentColor;
}

.action-link:first-child .icon-box {
  width: 34px;
  height: 34px;
  border-radius: 6px;
  background: var(--yellow);
  color: var(--plomo);
}

.action-link:first-child .icon-box svg {
  width: 28px;
  height: 28px;
}

.arrow {
  width: 16px;
  height: 16px;
  border-top: 4px solid var(--yellow);
  border-right: 4px solid var(--yellow);
  transform: rotate(45deg);
}

.qr-panel {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 14px 14px 16px;
  border: 1.5px solid var(--yellow);
  border-radius: 8px;
  background: rgba(10, 12, 13, 0.44);
}

.qr-panel h2 {
  margin-bottom: 0;
  color: var(--yellow);
  font-size: 1.55rem;
  line-height: 1;
}

#qrCode {
  width: 154px;
  height: 154px;
  padding: 9px;
  border-radius: 8px;
  background: var(--white);
}

@media (max-width: 390px) {
  .page-shell {
    padding: 8px;
  }

  .phone-card {
    min-height: auto;
    padding: 24px 16px 18px;
    border-radius: 28px;
  }

  .side-accent {
    right: 14px;
    height: 108px;
  }

  .photo-ring {
    width: 150px;
    height: 150px;
  }

  .action-link {
    grid-template-columns: 42px minmax(0, 1fr) 20px;
    min-height: 54px;
    padding: 8px 12px;
    font-size: 1rem;
  }

  .icon-box,
  .icon-box svg {
    width: 30px;
    height: 30px;
  }
}

@media (min-width: 900px) {
  .page-shell {
    padding: 32px;
  }

  .phone-card {
    width: 470px;
    min-height: 820px;
    padding: 32px 31px 26px;
  }

  .photo-ring {
    width: 190px;
    height: 190px;
  }
}
