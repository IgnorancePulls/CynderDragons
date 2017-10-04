export interface Candidate {
    id: number;
    name: string;
    gender: string;
    image?: string;
    selectedCandidateGender?: string;
    description?: string;
    likesYou: boolean;
}
