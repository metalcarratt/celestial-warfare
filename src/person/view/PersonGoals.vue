<template>
    <div >
        <h2>Goals</h2>
        <template v-if="!props.person.action.hasAction() && validGoals().length > 0">
            <select v-model="goalName">
                <option v-for="(goal, gindex) in validGoals()" :key="gindex">{{ goal.name }}</option>
            </select>
            <button v-if="showButton()" @click="clickButton">Assign goal</button>
        </template>
        <template v-else-if="props.person.goals.hasGoal()">
            Current goal: <strong>{{ props.person.goals.goalName() }}</strong>
        </template>
        <template v-else>
            No goals
        </template>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { allGoals, goalForName } from '@/goals/allGoals';
import { PersonType } from '../Person';

const props = defineProps({
    person : PersonType
})

const goalName = ref(null);

const validGoals = () => allGoals.filter(goal => !goal.complete(props.person));

const goal = () => goalName.value ? goalForName(goalName.value) : null;

const showButton = () => goalName.value;

const clickButton = () => props.person.goals.assignGoal(goal());
</script>

<style scoped>
select, input, button {
    display: block;
    width: 100%;
    box-sizing: border-box;
}
</style>