import type { LearnershipItem } from "@/components/all-learnerships-grid"

export function getAccreditedLearnerships(): LearnershipItem[] {
    const contactHref = (title: string) =>
        `/contact?learnership=${encodeURIComponent(title)}`

    const raw: Array<{
        id: string
        title: string
        section: string
        nqf: number
        credits: number
        code: string
    }> = [
        // QCTO — Occupational Skills Programmes
        { id: "qcto-workplace-prep-officer", title: "Work Place Preparedness and Risk Control Officer - Communicable & Other Occupational Diseases", section: "QCTO", nqf: 4, credits: 5, code: "SP-200902" },
        { id: "qcto-basic-first-aid", title: "Basic Emergency First Aid Responder", section: "QCTO", nqf: 2, credits: 2, code: "SP-230801" },
        { id: "qcto-workplace-prep-assistant", title: "Work Place Preparedness and Risk Control Assistant - Communicable & Other Occupational Diseases", section: "QCTO", nqf: 3, credits: 3, code: "SP-200901" },
        { id: "qcto-advanced-first-aid", title: "Advanced Emergency First Aid Responder", section: "QCTO", nqf: 4, credits: 6, code: "SP-230803" },
        { id: "qcto-intermediate-first-aid", title: "Intermediate Emergency First Aid Responder", section: "QCTO", nqf: 3, credits: 5, code: "SP-230802" },
        { id: "qcto-basic-euc", title: "Basic End User Computing", section: "QCTO", nqf: 3, credits: 30, code: "SP-240201" },
        { id: "qcto-intermediate-euc", title: "Intermediate End User Computing", section: "QCTO", nqf: 4, credits: 20, code: "SP-240202" },
        { id: "qcto-advanced-euc", title: "Advanced End User Computing", section: "QCTO", nqf: 5, credits: 20, code: "SP-240203" },
        { id: "qcto-new-venture", title: "New Venture Creation", section: "QCTO", nqf: 2, credits: 32, code: "SP-210401" },

        // Services SETA
        { id: "servicesseta-fetc-nvc", title: "FETC: New Venture Creation", section: "Services SETA", nqf: 4, credits: 149, code: "66249" },
        { id: "servicesseta-nc-nvc-smme", title: "National Certificate: New Venture Creation (SMME)", section: "Services SETA", nqf: 2, credits: 138, code: "49648" },

        // AgriSETA
        { id: "agriseta-plant-production-1", title: "National Certificate: Plant Production (NQF 1)", section: "AgriSETA", nqf: 1, credits: 0, code: "48972" },
        { id: "agriseta-plant-production-2", title: "National Certificate: Plant Production (NQF 2)", section: "AgriSETA", nqf: 2, credits: 0, code: "48975" },
        { id: "agriseta-plant-production-3", title: "National Certificate: Plant Production (NQF 3)", section: "AgriSETA", nqf: 3, credits: 0, code: "49052" },
        { id: "agriseta-plant-production-4", title: "National Certificate: Plant Production (NQF 4)", section: "AgriSETA", nqf: 4, credits: 0, code: "49009" },
        { id: "agriseta-agri-extension", title: "National Certificate: Agricultural Extension", section: "AgriSETA", nqf: 5, credits: 0, code: "59409" },
        { id: "agriseta-poultry-processing", title: "National Certificate: Poultry Processing", section: "AgriSETA", nqf: 3, credits: 0, code: "49579" },
        { id: "agriseta-mixed-farming", title: "National Certificate: Mixed Farming Systems", section: "AgriSETA", nqf: 2, credits: 0, code: "48977" },
        { id: "agriseta-agric-sales", title: "National Certificate: Agric Sales and Services", section: "AgriSETA", nqf: 4, credits: 0, code: "14854" },
        { id: "agriseta-agri-trade", title: "National Certificate: Agri Trade Processes", section: "AgriSETA", nqf: 2, credits: 0, code: "14851" },
    ]

    return raw.map((item) => ({
        id: item.id,
        title: item.title,
        section: item.section,
        nqf: item.nqf,
        credits: item.credits,
        duration: "12 Months",
        description: `${item.section}-accredited programme. Qualification/Programme Code: ${item.code}.`,
        href: contactHref(item.title),
        cta: "Enquire Now",
    }))
}