import type EvaluationConfig from '@/types/EvaluationConfig';
import type { Request } from '@betrybe/flipt-sdk';
import type { Evaluation } from '@betrybe/flipt-sdk';
declare function useBatchEvaluation(requests: Request[], config: Pick<EvaluationConfig, 'requestId'>): {
    loading: boolean;
    match: Evaluation<Record<string, string>>[];
    error: unknown;
};
export default useBatchEvaluation;
//# sourceMappingURL=useBatchEvaluation.d.ts.map