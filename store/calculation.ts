import Store, { CalculationState } from '../@types';

/* ------------------------------------------------
=> State
----------------------------------------------- */
export const state = (): CalculationState => ({
  isTableLoading: true,
  calculationHistories: [],
  totalData: 0
});

/* ------------------------------------------------
=> Save Initial State
----------------------------------------------- */
const initialState: CalculationState = state();

/* ------------------------------------------------
=> Mutations
----------------------------------------------- */
export const mutations = {
  resetState(state: CalculationState): void {
    Object.assign(state, initialState);
  },
  addToHistory(state: CalculationState, processedCalculation: any): void {
    state.calculationHistories.push(processedCalculation);
  }
};

/* ------------------------------------------------
=> Actions
----------------------------------------------- */
export const actions: any = {
  async resetState(store: Store<any> | any): Promise<void> {
    await store.commit('resetState');
  },
  async saveToHistory(
    store: Store<any> | any,
    processedCalculation: any
  ): Promise<void> {
    await store.commit('addToHistory', processedCalculation);
  }
};
