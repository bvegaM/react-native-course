import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import TaskInput from "../components/TaskInput";
import { useTasks } from "../state/useTasks";

export default function HomeScreen() {
  const { tasks, addTask, deleteTask } = useTasks();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Mis Tareas</Text>

      <TaskInput onAdd={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>• {item.title}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.delete}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay tareas aún 😴</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
    marginBottom: 25,
  },
  taskItem: {
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "#E5E7EB",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskText: {
    fontSize: 16,
    color: "#111827",
  },
  emptyText: {
    textAlign: "center",
    color: "#9CA3AF",
    marginTop: 40,
    fontSize: 16,
  },
  delete: {
    fontSize: 18,
  },
});
