import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenWrapperScrollable from './screen-wrappers/ScreenWrapperScrollable';

type CatalogItem = {
  name: string;
  price: number;
  category: string;
  onSale: boolean;
};

export default function Home() {
  // Nome do usuário exibido na saudação do topo da tela.
  const userName = 'Will';
  const [reloadCount, setReloadCount] = useState(0);

  // Lista de dados do catálogo que será renderizada dinamicamente com map.
  const dataList: CatalogItem[] = [
    { name: 'God of War Ragnarök', price: 199.9, category: 'Action', onSale: true },
    { name: 'EA Sports FC 26', price: 279.9, category: 'Sports', onSale: false },
    { name: 'Hollow Knight', price: 46.5, category: 'Indie', onSale: true },
    { name: 'Forza Horizon 5', price: 249.9, category: 'Racing', onSale: false },
    { name: 'Minecraft Legends', price: 149.9, category: 'Adventure', onSale: true },
    { name: 'Celeste', price: 36.9, category: 'Platform', onSale: false },
  ];

  // Componente salvo em uma constante para demonstrar interpolação de componentes.
  const headerContent = (
    <Text style={styles.subtitle}>
      Confira os destaques do catálogo de jogos desta semana. Atualizações: {reloadCount}
    </Text>
  );

  // Simula a ação de atualizar ao puxar a tela para baixo.
  const handleRefresh = async () => {
    setReloadCount((currentValue) => currentValue + 1);
  };

  return (
    <ScreenWrapperScrollable padding={20} gap={16} onRefresh={handleRefresh}>
      <Text style={styles.title}>Olá, {userName}! 👋</Text>
      {headerContent}

      <View style={styles.listContainer}>
        {dataList.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.itemName}>{item.name}</Text>

              {/* Exibe o selo de oferta somente quando o item estiver em promoção. */}
              {item.onSale && <Text style={styles.badge}>OFERTA</Text>}
            </View>

            <Text style={styles.category}>Categoria: {item.category}</Text>

            {/* Usa operador ternário para trocar a cor do preço conforme a oferta. */}
            <Text style={[styles.price, { color: item.onSale ? '#16a34a' : '#6b7280' }]}>
              Preço: R$ {item.price.toFixed(2)}
            </Text>
          </View>
        ))}
      </View>
    </ScreenWrapperScrollable>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
    marginTop: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 24,
  },
  listContainer: {
    gap: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  itemName: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  badge: {
    backgroundColor: '#fee2e2',
    color: '#b91c1c',
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    overflow: 'hidden',
  },
  category: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
  },
});