<template>

  <v-dialog
      transition="dialog-top-transition"
      width="800"
      v-model="isModalOpened"
  >
    <v-card>
      <v-toolbar
          color="primary"
          :title="isEditing ? 'Modifier une tâche' : 'Ajouter une tâche'"
      ></v-toolbar>
      <v-card-text>
        <v-form ref="form">
          <v-row>
            <v-col cols="12" lg="4" order="last" order-lg="first">
              <v-select
                  v-model="taskData.statut"
                  :items="statuses"
                  item-title="titre"
                  item-value="id"
                  label="Status"
                  required
              ></v-select>
            </v-col>
            <v-col cols="12" lg="4" order="first" order-lg="last">
              <v-text-field
                  v-model="taskData.startDate"
                  label="Date de début"
                  type="date"
                  required
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="4" order="first" order-lg="last">
              <v-text-field
                  v-model="taskData.endDate"
                  label="Date de fin"
                  type="date"
                  required
              >
              </v-text-field>
            </v-col>
          </v-row>
          <hr>
          <v-text-field
              v-model="taskData.titre"
              label="Titre"
              required
          ></v-text-field>
          <v-textarea
              v-model="taskData.description"
              label="Description"
              required
          ></v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn
            variant="flat"
            color="error"
            @click="isModalOpened = false"
        >Annuler
        </v-btn>
        <v-btn
            variant="flat"
            color="primary"
            @click="submitTaskForm"
        >Enregistrer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-container>
    <h1 class="text-center">TP VUE JS</h1>
    <div class="d-flex justify-end">
      <v-btn @click="setupCreateTask" color="primary" class="mb-2">
        <v-icon>mdi-plus</v-icon>
        Ajouter
      </v-btn>
    </div>
    <v-row justify="space-around">
      <v-col cols="12" md="6" lg="4" v-for="status in statuses">
        <v-card
            :color="status.color"
            class="mx-auto"
            elevation="15"
            max-width="344"
        >
          <v-card-title class="text-h5">{{ status.titre }}</v-card-title>
          <hr>
          <div class="d-flex flex-column">
            <div v-for="task in tasks.filter(task => task.statut.id === status.id)">
              yo
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./index.ts"></script>
