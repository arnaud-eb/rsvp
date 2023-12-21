import checkListIcon from "@/public/icons/checkList.svg";
import contactDetailsIcon from "@/public/icons/contactDetails.svg";
import guestsIcon from "@/public/icons/guests.svg";
import hotelIcon from "@/public/icons/hotel.svg";
import messageIcon from "@/public/icons/message.svg";
import scheduleIcon from "@/public/icons/schedule.svg";

export const steps = [
  {
    id: "1",
    name: "Invités",
    src: guestsIcon,
    fields: ["email"],
  },
  {
    id: "2",
    name: "Détails",
    src: contactDetailsIcon,
    fields: [
      "guests",
      "guests.0.firstName",
      "guests.0.lastName",
      "guests.0.dietaryRestrictions",
      "guests.1.firstName",
      "guests.1.lastName",
      "guests.1.dietaryRestrictions",
    ],
  },
  {
    id: "3",
    name: "Programme",
    src: scheduleIcon,
    fields: ["activities"],
  },
  { id: "4", name: "Logement", src: hotelIcon, fields: ["accommodation"] },
  { id: "5", name: "Message", src: messageIcon, fields: ["message"] },
  // { id: "6", name: "Résumé", src: checkListIcon },
  { id: "6", name: "Loader", src: checkListIcon },
  { id: "7", name: "Confirmation", src: checkListIcon },
];
