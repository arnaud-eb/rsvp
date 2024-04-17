import travelVideo from "@/videos/gift-travel.mp4";
import Video from "next-video";

import ClipboardButton from "@/components/ClipboardButton";
import { FINANCIAL_DATA } from "@/components/Gift/constants";

const { IBAN, CONTACT_DETAILS } = FINANCIAL_DATA;

const classNameCard = "shadow-2xl aspect-square w-11/12 sm:w-1/2";

const GiftPage = () => (
  <main className="m-auto flex w-full min-w-[350px] max-w-[1200px]">
    <section className="flex w-full flex-col items-center justify-center gap-2 px-2 py-4 sm:gap-1 md:gap-2 lg:mx-auto lg:mt-20 lg:w-11/12 lg:flex-row">
      <article
        className={`${classNameCard} relative overflow-hidden rounded-lg`}
      >
        <div className="absolute left-0 top-0 h-full w-full animate-pulse bg-primary-600" />
        <Video src={travelVideo} className="h-full w-full" />
      </article>
      <article
        className={`${classNameCard} relative flex flex-col justify-around border-4 border-solid border-secondary-300 bg-neutral-200 px-3 py-0 xl:py-4`}
      >
        <h1 className="text-center text-2xl font-bold md:text-3xl">
          2<sup>ème</sup> round 🥊
        </h1>
        <p className="text-base font-light text-secondary-400 md:text-lg lg:text-sm">
          Après une première tentative mitigée en 2020, on reprend le sac à dos
          pour la Patagonie l&apos;année prochaine 🥾! Ça nous ferait le plus
          grand plaisir que vous contribuiez à notre petite aventure:
        </p>
        <div>
          <h2 className="mb-0.5 text-base font-medium md:text-xl lg:text-base xl:mb-2">
            Bénéficiaire:
          </h2>
          <address className="shadow-input-form relative mb-1 flex flex-row rounded border border-secondary-300 bg-tertiary-700 p-2.5 text-sm not-italic xl:mb-4">
            <div className="hidden space-y-2 text-sm font-bold text-primary-900 md:text-base lg:block lg:text-sm">
              Nom: <br />
              Adresse:
            </div>
            <div className="ml-2 space-y-2 whitespace-break-spaces text-sm text-secondary-50 md:text-base lg:text-sm">
              {CONTACT_DETAILS.text}
            </div>
            <ClipboardButton target={CONTACT_DETAILS.text.replace("\n", " ")} />
          </address>
          <h2 className="mb-0.5 text-base font-medium md:text-xl lg:text-base xl:mb-2">
            IBAN:
          </h2>
          <div className="relative mb-1 xl:mb-4">
            <input
              type="text"
              className="shadow-input-form block w-full rounded border border-secondary-300 bg-tertiary-700 p-2.5 text-sm text-secondary-50 md:text-base lg:text-sm"
              value={IBAN.text}
              readOnly
            />
            <ClipboardButton target={IBAN.text} />
          </div>
        </div>
        <div className="curtain-stripe" />
      </article>
    </section>
  </main>
);

export default GiftPage;
