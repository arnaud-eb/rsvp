import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  CustomFlowbiteTheme,
  Flowbite,
} from "flowbite-react";
import Link from "next/link";
import { FC } from "react";
import { MdMap } from "react-icons/md";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";

const customTheme: CustomFlowbiteTheme = {
  accordion: {
    root: {
      flush: {
        off: "rounded-b-lg border",
      },
    },
    content: {
      base: "px-3 py-5 xs:p-5 last:rounded-b-lg bg-neutral-50",
    },
    title: {
      arrow: {
        base: "h-6 w-6 shrink-0 text-exclusive-50",
      },
      base: "text-xl flex w-full items-center justify-between p-5 text-left font-medium last:rounded-b-lg gap-1 md:gap-2 outline-tertiary-700",
      flush: {
        off: "hover:bg-neutral-400 last:rounded-b-lg",
      },
      open: {
        on: "bg-neutral-400 text-gray-900 last:rounded-b-lg",
      },
    },
  },
};

const Info: FC = () => {
  return (
    <>
      <header className="bg-anniversary rounded-tl-lg rounded-tr-lg border border-tertiary-700 bg-neutral-400 p-5 text-left font-medium">
        <h2 className="text-3xl">Foire aux questions</h2>
      </header>
      <section
        className="rounded-b-lg border border-t-0 border-tertiary-700 bg-neutral-200"
        data-lenis-prevent
      >
        <Flowbite theme={{ theme: customTheme }}>
          <Accordion collapseAll className="divide-tertiary-700 border-0">
            <AccordionPanel>
              <AccordionTitle>
                Quel est le programme du samedi 11 mai?
              </AccordionTitle>
              <AccordionContent>
                <div className="mx-auto flow-root max-w-3xl">
                  <div className="divide-y divide-exclusive-50">
                    <div className="flex flex-row items-center py-2 text-secondary-400">
                      <p className="w-28 shrink-0 text-right text-lg font-normal opacity-60">
                        15:00 - 16:00
                      </p>
                      <p className="ml-3 text-lg font-semibold text-secondary-400">
                        Gîte ou hôtel check-in
                      </p>
                    </div>
                    <div className="flex flex-row items-center py-2 text-secondary-400">
                      <p className="w-28 shrink-0 text-right text-lg font-normal opacity-60">
                        16:00 - 19:00
                      </p>
                      <p className="ml-3 text-lg font-semibold text-secondary-400">
                        Cocktail
                      </p>
                    </div>
                    <div className="flex flex-row items-center py-2 text-secondary-400">
                      <p className="w-28 shrink-0 text-right text-lg font-normal opacity-60">
                        19:00 - 22:00
                      </p>
                      <p className="ml-3 text-lg font-semibold text-secondary-400">
                        Repas
                      </p>
                    </div>
                    <div className="flex flex-row items-center py-2 text-secondary-400">
                      <p className="w-28 shrink-0 text-right text-lg font-normal opacity-60">
                        22:00 - 🕺🏽💃
                      </p>
                      <p className="ml-3 text-lg font-semibold text-secondary-400">
                        Soirée
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>
                Quel est le programme du dimanche 12 mai?
              </AccordionTitle>
              <AccordionContent>
                <div className="flex flex-row items-center py-2 text-secondary-400">
                  <p className="w-28 shrink-0 text-right text-lg font-normal opacity-60">
                    11:00 - 15:00
                  </p>
                  <p className="ml-3 text-lg font-semibold text-secondary-400">
                    Brunch
                  </p>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>
                Où se trouve le lieu de la réception?
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-lg font-light text-secondary-400">
                  Toutes les activités ainsi que l&apos;hôtel et le gîte se
                  trouvent au même endroit:
                </p>
                <div className="mx-auto flow-root max-w-3xl">
                  <div className="divide-y divide-exclusive-50">
                    <div className="py-2 text-lg text-secondary-400">
                      <a
                        href="http://www.lessorbiers.com/views/FR/sorbiers/hotel.html"
                        className="flex underline transition-all hover:text-primary-900 hover:no-underline"
                      >
                        <p>Au Domaine Les Sorbiers</p>
                        <TbCircleArrowUpRightFilled className="ml-1" />
                      </a>
                    </div>
                    <div className="py-2 text-lg text-secondary-400">
                      <a
                        href="https://www.google.com/maps/place/Les+Sorbiers/@50.1804404,4.8218385,17z/data=!3m1!4b1!4m9!3m8!1s0x47c1ebc4192ab8cb:0xb4bc4828e4ddaf93!5m2!4m1!1i2!8m2!3d50.1804405!4d4.8267094!16s%2Fg%2F1tk_hw26?entry=ttu"
                        className="flex underline underline-offset-8 transition-all hover:text-primary-900 hover:no-underline"
                      >
                        <p>
                          Rives de Haute Meuse <br />
                          Rue des Sorbiers, 241 <br />
                          5543 Hastière - Belgique
                        </p>
                        <MdMap className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>
                Je loge au gîte. Que dois-je savoir?
              </AccordionTitle>
              <AccordionContent>
                <ul className="list-disc pl-5 text-lg text-secondary-400">
                  <li>Check-in à partir de 15h.</li>
                  <li>
                    Le gîte sera fermé de 16h à 22h pour des raisons de
                    sécurité. Catherine aura les clés au cas où tu en aurais
                    besoin.
                  </li>
                  <li>
                    Il y a quelques places de parking près du gîte et un grand
                    parking à l&apos;hôtel. Ne te stationne pas dans la rue du
                    gîte (rue des Sorbiers).
                  </li>
                  <li>
                    Tu auras besoin de serviettes de bain et de linge de lit
                    d&apos;une personne (une taie d&apos;oreiller, une housse de
                    couette et un drap de lit) ou d&apos;un sac de couchage.
                  </li>
                  <li>
                    Tu trouveras plus d&apos;informations sur le gîte{" "}
                    <a
                      href="https://gite-maisonblanche.com/location-gite-de-grand-capacite-meuse/"
                      className="underline transition-all hover:text-primary-900 hover:no-underline"
                    >
                      ici
                    </a>
                    .
                  </li>
                </ul>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>
                Je loge à l&apos;hôtel. Que dois-je savoir?
              </AccordionTitle>
              <AccordionContent>
                <ul className="list-disc pl-5 text-lg text-secondary-400">
                  <li>Check-in à partir de 15h.</li>
                  <li>Check-out et règlement le dimanche avant 11h.</li>
                  <li>Il y a un grand parking à l&apos;hôtel.</li>
                  <li>
                    Tu trouveras plus d&apos;informations sur l&apos;hôtel{" "}
                    <a
                      href="http://www.lessorbiers.com/views/FR/sorbiers/chambres.html"
                      className="underline transition-all hover:text-primary-900 hover:no-underline"
                    >
                      ici
                    </a>
                    .
                  </li>
                </ul>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>Va-t-il pleuvoir?</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-lg font-light text-secondary-400">
                  Je ne sais pas mais si j&apos;étais toi, je prendrais mon
                  parapluie 😉. Ce ne sont pas les tropiques, mais le domaine
                  étant en bord de Meuse, je prévoirais également de
                  l&apos;anti-moustique.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>Y aura-t-il un photographe?</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-lg font-light text-secondary-400">
                  Non, mais tu fais bien de poser la question! On compte sur toi
                  pour prendre un max de photos à la sauvette 📸! Un peu avant
                  le mariage, on partagera un lien ici pour charger les photos
                  sur une plateforme en ligne afin que tout le monde puisse en
                  profiter. Merci 😁!
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>Que puis-je vous offrir?</AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-lg font-light text-secondary-400">
                  On a zappé l&apos;urne et la liste de mariage, mais si tu veux
                  nous faire sourire 😁, on a une petite suggestion par{" "}
                  <Link
                    href="/cadeau"
                    className="underline transition-all hover:text-primary-900 hover:no-underline"
                  >
                    ici
                  </Link>
                  .
                </p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </Flowbite>
      </section>
    </>
  );
};

export default Info;
