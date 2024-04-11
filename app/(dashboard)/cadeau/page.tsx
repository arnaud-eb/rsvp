import travelVideo from "@/videos/gift-travel.mp4";
import BackgroundVideo from "next-video/background-video";

import ClipboardButton from "@/components/ClipboardButton";
import { FINANCIAL_DATA } from "@/components/Gift/constants";

const { IBAN, CONTACT_DETAILS } = FINANCIAL_DATA;

const classNameCard =
  "shadow-2xl aspect-square w-2/3 xs:w-1/2 sm:w-5/12 lg:w-1/2";

const GiftPage = () => (
  <main className="m-auto flex h-[calc(100vh-7rem)] w-full min-w-[350px] max-w-[1200px] items-center">
    <section className="flex w-full flex-col items-center justify-center gap-12 pt-4 xs:gap-4 sm:flex-row sm:gap-2 md:gap-4 lg:m-auto lg:w-11/12">
      <article className={`${classNameCard} rounded-xl`}>
        <BackgroundVideo src={travelVideo} className="h-full w-full" />
      </article>
      <article
        className={`${classNameCard} relative flex flex-col justify-around border-4 border-solid border-secondary-300 bg-neutral-200 px-3 py-0 xl:py-4`}
      >
        <h1 className="text-center text-xl font-bold lg:text-2xl">
          2<sup>ème</sup> round 🥊
        </h1>
        <p className="text-xs font-light text-secondary-400 md:text-sm xl:text-base">
          Après une première tentative mitigée en 2020, on reprend le sac à dos
          pour la Patagonie l&apos;année prochaine 🥾! Ça nous ferait le plus
          grand plaisir que vous contribuiez à notre petite aventure:
        </p>
        <div>
          <h2 className="mb-0.5 text-sm font-medium lg:text-base xl:mb-2">
            Bénéficiaire:
          </h2>
          <address className="shadow-input-form relative mb-2 flex flex-row rounded border border-secondary-300 bg-tertiary-700 p-2.5 text-sm not-italic xl:mb-4">
            <div className="hidden space-y-2 text-xs font-bold text-primary-900 lg:block lg:text-sm">
              Nom: <br />
              Adresse:
            </div>
            <div className="ml-2 space-y-2 whitespace-break-spaces text-xs text-secondary-50 lg:text-sm">
              {CONTACT_DETAILS.text}
            </div>
            <ClipboardButton target={CONTACT_DETAILS.text.replace("\n", " ")} />
          </address>
          <h2 className="mb-0.5 text-sm font-medium lg:text-base xl:mb-2">
            IBAN:
          </h2>
          <div className="relative mb-2 xl:mb-4">
            <input
              type="text"
              className="shadow-input-form block w-full rounded border border-secondary-300 bg-tertiary-700 p-2.5 text-xs text-secondary-50 lg:text-sm"
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
