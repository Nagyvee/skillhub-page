export interface QctoCourse {
    id: number
    nqf: 5 | 6 | 7
    title: string
    saqaId: number
    entryRequirements: string
    duration: number        // months
    credits: number
    learnershipCode: string | null
}

const QctoCourses: QctoCourse[] = [
    {
        id: 1, nqf: 5,
        title: "Clearing and Forwarding Agent",
        saqaId: 96368,
        entryRequirements: "NQF Level 4 with Mathematical Literacy",
        duration: 12, credits: 120,
        learnershipCode: "32Q320119151205",
    },
    {
        id: 2, nqf: 5,
        title: "Supply Chain Practitioner",
        saqaId: 110942,
        entryRequirements: "NQF Level 4 qualification with Mathematical Literacy",
        duration: 12, credits: 180,
        learnershipCode: "32Q3200441811455",
    },
    {
        id: 3, nqf: 5,
        title: "Procurement Officer",
        saqaId: 111445,
        entryRequirements: "NQF Level 4 qualification with Mathematical Literacy",
        duration: 12, credits: 180,
        learnershipCode: null,
    },
    {
        id: 4, nqf: 5,
        title: "Road Transport Manager",
        saqaId: 96371,
        entryRequirements: "NQF Level 4 with Mathematics or Occupational Certificate: Transport Clerk",
        duration: 18, credits: 205,
        learnershipCode: null,
    },
    {
        id: 5, nqf: 6,
        title: "Supply Chain Manager",
        saqaId: 111357,
        entryRequirements: "NQF Level 4 with Mathematical Literacy and 2 years assessed experience, or NQF Level 5",
        duration: 12, credits: 180,
        learnershipCode: null,
    },
    {
        id: 6, nqf: 7,
        title: "Supply Chain Executive",
        saqaId: 111386,
        entryRequirements: "NQF Level 4 with Mathematical Literacy and 4 years assessed experience, or NQF Level 6",
        duration: 12, credits: 180,
        learnershipCode: null,
    },
];

export default QctoCourses;
